import {
  Box,
  Button,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { FaChevronDown, FaEdit, FaTrashAlt } from "react-icons/fa";
import { useMutation } from "react-query";
import { ResourceModule } from "../../../api/modules/post.module";
import { ResourceView } from "../../../api/types/resource.types";
import { queryClient } from "../../../util/query-client";
import { rconsole } from "../../../util/remark-console";

type Props = {
  post: ResourceView;
  onUploadImagePressed: () => void;
};

export const ActionsSection = ({ post, onUploadImagePressed }: Props) => {
  const instance = ResourceModule.getInstance();
  const router = useRouter();
  const toast = useToast();
  const dangerColor = useColorModeValue("red.600", "red.400");
  const onEditPressed = () => {
    router.push("edit");
  };

  const mutation = useMutation(instance.deleteResource, {
    onMutate: () => {
      toast({
        title: "Action started",
        description: `Deleting post is in progress, please wait.`,
        status: "info",
        isClosable: true,
        duration: 10000,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["resources"], {
        refetchInactive: true,
      });
      setTimeout(() => {
        toast({
          title: "Action successfully done",
          description: `Deleting post was successful! Redirecting to channel page.`,
          status: "success",
          isClosable: true,
          duration: 3000,
        });
        router.back();
      }, 2000);
    },
    onError: (error) => {
      const err = error as AxiosError<{ message: string }>;
      rconsole.log("Error at deleteResource", JSON.stringify(err));
      toast({
        title: "Hiba erőforrás törlésekor!",
        description: `${err.response?.status} ${err.response?.data.message}. Próbáld meg később!`,
        status: "error",
        isClosable: true,
      });
    },
  });

  const onDeletePressed = () => {
    if (confirm("Biztosan törli az erőforrást?")) mutation.mutate(post.id);
  };

  return (
    <HStack>
      <Flex flex={1} borderTopWidth="2px" />
      <Box>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<FaChevronDown />}
            variant="ghost"
            colorScheme="theme"
          >
            Actions
          </MenuButton>
          <MenuList>
            <MenuItem icon={<FaEdit />} onClick={onEditPressed}>
              Edit post
            </MenuItem>
            <MenuDivider />
            <MenuItem
              color={dangerColor}
              icon={<FaTrashAlt />}
              onClick={onDeletePressed}
            >
              Delete post
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </HStack>
  );
};

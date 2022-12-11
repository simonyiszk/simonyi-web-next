import axios from "axios";
import {
  CreateResourceView,
  ResourceModel,
  ResourceView,
  UpdateResourceView,
} from "../types/resource.types";

export class ResourceModule {
  private static instance: ResourceModule;
  private constructor() {}

  public static getInstance(): ResourceModule {
    if (!ResourceModule.instance) {
      ResourceModule.instance = new ResourceModule();
    }
    return ResourceModule.instance;
  }

  async fetchResource(id: string): Promise<ResourceView> {
    const response = await axios.get<ResourceView>(`resources/${id}`);
    return response.data;
  }

  async fetchCreatedResourcesOfUser(id: string): Promise<ResourceView[]> {
    const response = await axios.get<ResourceView[]>(`resources/user/${id}`);
    return response.data;
  }

  async createResource(data: CreateResourceView) {
    return axios.post<ResourceModel & { id: string }>(`resources`, data);
  }

  async updateResource({ id, data }: { id: string; data: UpdateResourceView }) {
    return axios.patch<ResourceModel & { id: string }>(`resources/${id}`, data);
  }

  async deleteResource(id: string) {
    return axios.delete<ResourceModel & { id: string }>(`resources/${id}`);
  }
}

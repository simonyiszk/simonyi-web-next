export interface ResourceModel {
  subClass: string;
  createdAt: number; // unix
  publisherId: string;
  public: boolean;

  title?: string;
  rawMarkdownFull?: string;
  rawMarkdownLead?: string;
  imageUrl?: string;
}

export interface ResourceView extends ResourceModel {
  id: string;
}

export interface UpdateResourceView {
  public: boolean;
  title?: string;
  rawMarkdownFull?: string;
  rawMarkdownLead?: string;
  imageUrl?: string;
}

export interface CreateResourceView extends UpdateResourceView {
  subClass: string;
}

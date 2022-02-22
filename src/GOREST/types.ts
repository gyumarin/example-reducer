export interface payloadGorestTypes {
  gorest: Gorest;
}

export interface payloadDeleteTypes {
  id: number;
}

export interface Gorest {
  meta: {
    pagination: {
      total: number;
      pages: number;
      page: number;
      limit: number;
      links: {
        previous: null;
        current: string;
        next: string;
      };
    };
  };
  data: user[];
}

export interface user {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}

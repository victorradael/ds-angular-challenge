export interface Root {
  devs: Dev[];
}

export interface Dev {
  githubUsername: string;
  avatarUrl: string;
  id?: string;
  name: string;
  city: string;
  email: string;
  formation: string;
  techs: string;
  date?: string;
}

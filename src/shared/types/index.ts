export type UserState = {
  name: string;
  location: { address: string, coords: Array<number> };
  avatar: string | null;
  address: string;
  language: string;
  error: string;
  loading: boolean;
  portfolio: Array<{ text: string; link: string }>;
  availability: { time: string; prefered: string };
  experience: Array<{ name: string; year: number }>;
  code: string;
  phrase: {
    amazing: string;
    lookingFor: string;
  };
};

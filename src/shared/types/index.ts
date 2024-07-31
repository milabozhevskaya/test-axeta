export type UserState = {
  name: string;
  location: string;
  avatar: string | null;
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

export interface Me {
  image: string;
  name: string;
}

export interface MeState {
  user: Me | null;
  authenticated: boolean;
  error: string | null;
  pending: boolean;
}

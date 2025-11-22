import { supabase } from './supabase';

export interface User {
  id: string;
  email: string;
  role: string;
}

export const signUp = async (email: string, password: string, role: string = 'patient') => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw error;

  // Store JWT token
  if (data.session) {
    localStorage.setItem('jwt_token', data.session.access_token);
  }

  return data;
};

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;

  // Store JWT token
  if (data.session) {
    localStorage.setItem('jwt_token', data.session.access_token);
  }

  return data;
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  localStorage.removeItem('jwt_token');
  if (error) throw error;
};

export const getCurrentUser = async (): Promise<User | null> => {
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return null;

  return {
    id: user.id,
    email: user.email || '',
    role: user.user_metadata?.role || 'patient',
  };
};

export const updateUserProfile = async (updates: any) => {
  const { data, error } = await supabase.auth.updateUser(updates);
  if (error) throw error;
  return data;
};

export const resetPassword = async (email: string) => {
  const { error } = await supabase.auth.resetPasswordForEmail(email);
  if (error) throw error;
};

export const updatePassword = async (newPassword: string) => {
  const { error } = await supabase.auth.updateUser({
    password: newPassword,
  });
  if (error) throw error;
};

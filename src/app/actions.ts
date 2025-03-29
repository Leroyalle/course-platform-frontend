'use server';

import { cookies } from 'next/headers';

export async function createCookie(name: string, value: string) {
  const cookieStore = await cookies();
  cookieStore.set(name, value, {
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
  });
}

export async function deleteCookie(name: string) {
  const cookieStore = await cookies();
  cookieStore.delete(name);
}

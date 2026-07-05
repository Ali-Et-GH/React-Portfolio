'use client'

import { useSearchParams } from "next/navigation";

export default function useReturnUrl(){
  const searchParams = useSearchParams();

  return searchParams.get('returnUrl');
}
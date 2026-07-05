'use client'

import { usePathname, useSearchParams } from "next/navigation";

export default function useReturnUrlParam(url = null){

  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const currentUrl = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '');
  return `?returnUrl=${url || encodeURIComponent(currentUrl)}`;
}
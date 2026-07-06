'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function CategoryNav({styles}){
  const searchParams = useSearchParams()
  const current = searchParams.get('category');

  const createLink = (updates) => {
    const params = new URLSearchParams(
      searchParams.toString()
    )

    Object.entries(updates).forEach(([key, value]) => {
      if (
        value === null ||
        value === undefined ||
        value === ''
      ) {
        params.delete(key)
      } else {
        params.set(key, value)
      }
    })

    return `/products?${params.toString()}`
  }

  const categories = [
    {
      name: 'All Products',
      value: null,
    },
    {
      name: 'Fragrances',
      value: 'fragrances'
    },
    {
      name: 'Beauty',
      value: 'beauty'
    },
    {
      name: 'Skin Care',
      value: 'skin-care'
    }
  ]

  return (
    <ul>
      {categories.map((category) => (
        <li key={category.name} className={current == category.value ? styles.current : ''}>
          <Link href={createLink({category: category.value, page: 1})}>
            {category.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
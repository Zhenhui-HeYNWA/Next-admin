'use client';
import styles from '@/app/ui/dashboard/search/search.module.css';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { MdSearch } from 'react-icons/md';

const Search = ({ placeholder }) => {
  //Get the useSearchParams hook read the current URL's query string
  const searchParams = useSearchParams();

  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);

    //split the uses to different page
    params.set('page', 1);

    if (e.target.value) {
      e.target.value.length > 2 && params.set('q', e.target.value);
    } else {
      params.delete('q');
    }
    replace(`${pathname}?${params}`);
  }, 300);

  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        type='text'
        placeholder={placeholder}
        className={styles.input}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;

import useFetchData from './hooks/useFetchData';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  // fetchData
  const { data, loading, error } = useFetchData();

  // useState
  const [counts, setCounts] = useState<{ [key: string]: number }>({});
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div
      className="min-h-svh p-6 flex flex-col gap-7 bg-(--color-Rose50)
                 xl:flex-row xl:p-20 2xl:flex-col md:items-center
                 xl:items-start 2xl:items-center"
    >
      <div className="xl:grow-0 xl:shrink-1 xl:h-auto">
        <Header />
        <Content
          data={data}
          loading={loading}
          error={error}
          counts={counts}
          setCounts={setCounts}
          hovered={hovered}
          setHovered={setHovered}
        />
      </div>
      <Footer
        data={data}
        counts={counts}
        setCounts={setCounts}
        hovered={hovered}
        setHovered={setHovered}
      />
    </div>
  );
}

export default App;

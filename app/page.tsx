import Hero from "@/components/hero";

export default async function Home() {
  return (
    <>
      <Hero />
      <main className="flex-1 flex flex-col gap-6 px-4 h-[1000px]">
        <p className="line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nobis
          eligendi mollitia saepe sunt deserunt assumenda fuga, exercitationem
          officia modi id perferendis? Dicta quis sint hic rerum et beatae
          placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          vitae dicta quaerat assumenda. Nostrum facilis eius distinctio
          explicabo a molestiae vitae accusamus, asperiores ullam dolorem, ea
          earum error praesentium aut.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          voluptate excepturi iusto eveniet dolore ad distinctio, quae
          consequatur officia quasi laborum, mollitia corporis asperiores. Enim,
          a id! Sapiente, ipsum cum. Exercitationem, quasi! Veritatis quia
          maxime aliquid nulla modi et non dignissimos quidem vel consequuntur
          quis, architecto dolorum voluptatem officia temporibus. Repudiandae
          non temporibus rerum eaque tempora dolores quam debitis rem!
        </p>
      </main>
    </>
  );
}

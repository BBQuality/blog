export default function Hero() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Ласкаво просимо в мій блог</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Тут ви знайдете статті про веб-розробку, технології та цікаві проєкти.
        </p>
        <a
          href="#latest-posts"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          Переглянути статті
        </a>
      </div>
    </section>
  );
}

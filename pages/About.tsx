import Head from 'next/head';

const About = () => {
  const email = "gameranonymous@gmail.com"; 

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>About Calculator App</title>
      </Head>
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            About Calculator App
          </h1>
        </div>
        <div className="mt-16 text-xl text-gray-700 leading-8">
          <p>
            Calculator App is a simple web application for doing basic math calculations. It was created using Next.js,
            a React-based web framework, and Tailwind CSS, a utility-first CSS framework.
          </p>
          <p className="mt-4">
            The app was developed by [Shoaib Ahmed] as a demonstration of how to build a web application using modern
            web development tools and techniques.
          </p>
          <p className="mt-4">
            If you have any questions or feedback about the app, you can contact [Shoaib] at{' '}
            <a href={`mailto:${email}`} className="text-blue-600">{email}</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

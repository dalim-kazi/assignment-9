import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='border-2 rounded-lg w-3/4 h-auto text-center ml-20 md:ml-30 lg:ml-40 bg-white p-5 m-10 '>
                <h2 className='text-2xl text-orange-500 mb-10'>What's the purpose of react Router</h2>
                <p className='text-lg'>React Router is a JavaScript framework that lets us handle client and server-side routing in React applications. It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page. It also allows us to use browser history features while preserving the right application view.</p>
            </div>
            <div className='border-2 rounded-lg w-3/4 h-auto ml-20 md:ml-30 lg:ml-40 bg-white p-5 m-10 '>
                <h2 className='text-2xl text-orange-500 mb-10 text-center'>How to context API work</h2>
                <p className='text-lg text-center'>You might think to yourself: "Well, I'm convinced. How do I implement Context API in my app?" First, make sure you need it. Sometimes people use shared state across nested components instead of just passing it as props. And if you do need it you should follow these very few steps:</p>
                <p className='text-lg ml-5 mt-5'>1. Create a folder under your app root named contexts (not required. just a convention)</p>
                <p className='text-lg ml-5'>2. Create a folder under your app root named contexts (not required. just a convention)</p>
                <p className='text-lg ml-5'>3. Create a file named your context nameContext.js, e.g. userContext.js</p>
                <p className='text-lg ml-5'>4. import and create a context like so:</p>
            </div>
            <div className='border-2 rounded-lg w-3/4 h-auto ml-20 md:ml-30 lg:ml-40 bg-white p-5 m-10 '>
                <h2 className='text-2xl text-orange-500 mb-10 text-center'>How to use Ref</h2>
                <p className='text-lg text-center'>There are a few good use cases for refs: In this post you'll learn how to use React.useRef() hook to create persisted mutable values (also known as references or refs), as well as access DOM elements.</p>
                <li className='text-lg ml-5 mt-5'>Managing focus, text selection, or media playback.</li>
                <li className='text-lg ml-5'>Triggering imperative animations.</li>
                <li className='text-lg ml-5'>Integrating with third-party DOM libraries.</li>
                <p className='text-lg ml-5 mt-2'>For example, instead of exposing open() and close() methods on a Dialog component, pass an isOpen prop to it.

</p>
            </div>
        </div>
    );
};

export default Blog;
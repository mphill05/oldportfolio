import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';

import { getRecentPosts, getSimilarPosts } from '../../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug)
        .then((result) => {
          const sortedPosts = result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
          setRelatedPosts(sortedPosts);
        })
    } else {
      getRecentPosts()
        .then((result) => {
          result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
          setRelatedPosts(result);
        });
    }
  }, [slug])

  return (
    <div className='bg-gray-900 shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b border-lime-500 pb-4'>
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className='flex items-center w-full mb-4'>
          <div className='w-16 flex-none'>
            <img
              alt={post.title}
              height='60px'
              width='60px'
              className='align-middle rounded-full'
              src={post.featuredImage.url}
            />
          </div>
          <div className='flex-grow ml-4'>
            <p className='text-gray-300 font-xs'>
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </p>
            <Link href={`/post/${post.slug}`} key={post.title} className='text-md'>
              <p className='hover:text-lime-500 cursor-pointer'>{post.title}</p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget

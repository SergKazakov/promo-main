import Title from '../Title';
import Post from './Post';
import styles from './index.css';

const posts = [
  {
    category: 'art / t-shirt',
    title: 't-shirt design',
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the indu Stry's standard dummy text ever since the 1500s,
           an unknown printer took a galley of type a scrambled it to make a type specimen book.`,
    url: '/',
    isReverse: false
  },
  {
    category: 'art / t-shirt',
    title: 't-shirt design',
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the indu Stry's standard dummy text ever since the 1500s,
           an unknown printer took a galley of type a scrambled it to make a type specimen book.`,
    url: '/',
    isReverse: false
  },
  {
    category: 'art / t-shirt',
    title: 't-shirt design',
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the indu Stry's standard dummy text ever since the 1500s,
           an unknown printer took a galley of type a scrambled it to make a type specimen book.`,
    url: '/',
    isReverse: true
  },
  {
    category: 'art / t-shirt',
    title: 't-shirt design',
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the indu Stry's standard dummy text ever since the 1500s,
           an unknown printer took a galley of type a scrambled it to make a type specimen book.`,
    url: '/',
    isReverse: true
  }
];

const Blog = () => (
  <section className={ styles.blogWrapper }>
    <Title
      title={ 'Our blog' }
      subtitle={ 'Suspendisse sed eros mollis, tincidunt felis eget, interdum eratullam sit amet odio.' }
    />
    <div className={ styles.blog }>
      {
        posts.map(({isReverse, category, title, text, url}, index) => {
          return (
            <Post
              isReverse={ isReverse }
              key={ index }
              src={ require(`./blog-${++index}.jpg`) }
              category={ category}
              title={ title}
              text={ text }
              url={ url}
            />
          )
        })
      }
    </div>
  </section>
);

export default Blog;

import { graphql, Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import SEO from '../components/seo';


type PostType = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
};

type PodcastPostType = PostType & {
  podcasts_fields: {
    autoraPodcast: string;
  };
};

type BlogPageTypes = {
  data: {
    blogPosts: {
      nodes: PostType[];
    };
    podcastsPosts: {
      nodes: PodcastPostType[];
    };
  };
};

const Blog = ({ data: { blogPosts, podcastsPosts } }: BlogPageTypes) => {
  return (
    <div>
      <SEO
        description="En este espacio presentamos reflexiones, podcasts, artículos y más contentido que hemos estado generando con la cooperativa."
        title="Blog"
      />
      <div className="desktop-container">
        <div className="left-panel">
          <video
            autoPlay
            controls
            loop
            muted
            poster="https://subtedesarrollo.xyz/wp-content/uploads/2021/07/Conversatorios_imagen.webp"
            src="https://res.cloudinary.com/subteuy/video/upload/v1610826241/subte.uy/Conversatorios/SPOTCS_C4_baja_u82811.mp4"
          />
          <h2>Conversatorios subterráneos</h2>
          <p>
            Los Conversatorios Subterráneos son espacios donde nos proponemos reflexionar
            colectivamente sobre los principales problemas de la comunicación en las cooperativas,
            organizaciones sociales, culturales y políticas.
          </p>
          <div className="podcast-title">
            <StaticImage alt="Imagen Episodio #0" src="../images/CoverEpisodios.webp" />
            <h3>Los problemas de comunicación de las organizaciones populares</h3>
          </div>
          {podcastsPosts.nodes.map((post: PodcastPostType) => (
            <div key={post.id} className="podcast-post-container">
              <Link to={`/${post.slug}`}>
                <h3>{post.title}</h3>
              </Link>
              <p className="author">{post.podcasts_fields.autoraPodcast}</p>
              <div className="excerpt" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
              <Link to={`/${post.slug}`}>Leer</Link>
            </div>
          ))}
        </div>
        <div className="right-panel">
          <h2>Subsuelo. Apuntes cooperativos</h2>
          <p>
            Abrimos este espacio para registrar y compartir algunas reflexiones sobre nuestra
            experiencia cooperativa, sobre las experiencias de autogestión, los proyectos de
            trabajo, los procesos colaborativos, las tristezas y las alegrías que atravesamos en
            este espacio autogestionado que estamos creando.
          </p>
          {blogPosts.nodes.map((post: PostType) => (
            <div key={post.id} className="blog-post-container">
              <h3>{post.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
              <Link to={`/${post.slug}`}>Leer</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

export const query = graphql`
  query MyBlogPostQuery {
    blogPosts: allWpPost(
      filter: { categories: { nodes: { elemMatch: { slug: { eq: "blog" } } } } }
      sort: { fields: date, order: ASC }
    ) {
      nodes {
        id
        slug
        title
        excerpt
      }
    }
    podcastsPosts: allWpPost(
      filter: { categories: { nodes: { elemMatch: { slug: { eq: "podcasts" } } } } }
      sort: { fields: date, order: ASC }
    ) {
      nodes {
        id
        slug
        title
        excerpt
        podcasts_fields {
          autoraPodcast
        }
      }
    }
  }
`;

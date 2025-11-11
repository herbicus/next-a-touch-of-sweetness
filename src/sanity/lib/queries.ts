// src/sanity/lib/queries.ts

import { defineQuery } from "next-sanity";

export const POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
  _id, 
  title, 
  slug, 
  description, 
  mainImage
}`);

export const POST_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  _id,
  _type,
  title,
  description,
  body,
  mainImage,
  relatedPosts[]{
    _key, // required for drag and drop
    ...@->{_id, title, slug} // get fields from the referenced post
  }
}`);

export const HOMEPAGE_QUERY = defineQuery(`*[_id == "homepage-document-id"][0]{
  _id,
  _type,
  title,
  description,
  mainImage{
    asset->{
      _id,
      url,
      metadata
    },
    alt
  },
  sections[]{
    _type,
    _key,
    _type == "hero" => {
      title,
      description,
      image{
        asset->{
          _id,
          url,
          metadata
        },
        alt
      },
      mobileImage{
        asset->{
          _id,
          url,
          metadata
        },
        alt
      }
    },
    _type == "cakeCards" => {
      cards[]{
        _key,
        title,
        description
      }
    },
    _type == "servicesCards" => {
      cards[]{
        _key,
        title,
        description
      }
    },
    _type == "carousel" => {
      images->{
        title,
        images[]{
          _key,
          title,
          image{
            asset->{
              _id,
              url,
              metadata
            },
            alt
          }
        }
      }
    }
  }
}`);

import React, { useState } from 'react';
import { IGatsbyImageData, GatsbyImage, getImage } from 'gatsby-plugin-image';
import { FileNode } from 'gatsby-plugin-image/dist/src/components/hooks';

const CustomWrappterGatsbyImage = ({
  localFile,
  altText,
}: {
  localFile: FileNode;
  altText: string;
}) => {
  const [image] = useState<IGatsbyImageData | undefined>(getImage(localFile));

  return <>{image && <GatsbyImage alt={altText} image={image} />}</>;
};

export default CustomWrappterGatsbyImage;

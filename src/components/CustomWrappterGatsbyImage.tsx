import React, { CSSProperties, useState } from 'react';
import { IGatsbyImageData, GatsbyImage, getImage } from 'gatsby-plugin-image';
import { FileNode } from 'gatsby-plugin-image/dist/src/components/hooks';

const CustomWrappterGatsbyImage = ({
  localFile,
  altText,
  style = {},
}: {
  localFile: FileNode;
  altText: string;
  style?: CSSProperties;
}) => {
  const [image] = useState<IGatsbyImageData | undefined>(getImage(localFile));

  return <>{image && <GatsbyImage alt={altText} image={image} style={style} />}</>;
};

export default CustomWrappterGatsbyImage;

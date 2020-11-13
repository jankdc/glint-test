import React from "react";

import { StyledAvatar } from "./Avatar.styles";

export const DEFAULT_AVATAR_URL = "https://github.com/identicons/jasonlong.png";

export interface AvatarProps {
  url?: string;
}

function Avatar({ url }: AvatarProps) {
  return <StyledAvatar alt="Avatar" src={url || DEFAULT_AVATAR_URL} />;
}

export default Avatar;

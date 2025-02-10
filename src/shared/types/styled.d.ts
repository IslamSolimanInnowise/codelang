import React from "react";
import "styled-components/native";

declare module "styled-components" {
  export interface DefaultTheme {
    backgroundColor: React.CSSProperties["backgroundColor"];
    color: React.CSSProperties["color"];
  }
}

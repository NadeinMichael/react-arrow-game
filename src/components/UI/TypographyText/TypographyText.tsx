import cn from "classnames"
import { Typography, TypographyProps } from "@mui/material"

import styles from "./TypographyText.module.css"

export interface ITypographyTextProps extends TypographyProps {
  //
}

const TypographyText: React.FC<ITypographyTextProps> = (props) => {
  const { children, className = "" } = props

  return (
    <Typography {...props} className={cn(styles.text, className)}>
      {children}
    </Typography>
  )
}

export default TypographyText

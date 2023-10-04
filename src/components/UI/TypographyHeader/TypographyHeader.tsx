import cn from "classnames"
import { Typography, TypographyProps } from "@mui/material"

import styles from "./TypographyHeader.module.css"

export interface ITypographyHeaderProps extends TypographyProps {
  //
}

const TypographyHeader: React.FC<ITypographyHeaderProps> = (props) => {
  const { children, className = "" } = props

  return (
    <Typography variant="h3" {...props} className={cn(styles.text, className)}>
      {children}
    </Typography>
  )
}

export default TypographyHeader

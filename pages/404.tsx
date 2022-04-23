import Link from "next/link"
import { Typography, Button } from "@mui/material"

export default function Custom404() {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <Link href="/" passHref>
        <Button>トップへ戻る</Button>
      </Link>
    </>
  )
}

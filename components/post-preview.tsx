import DateFormatter from "./date-formatter";
import Link from "next/link";
import Image from "next/image";
import Post from "../types/post";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

type Props = {
  post: Post
}

const PostPreview = ({ post }: Props) => {
  return (
    <Card>
      {post.coverImage &&
        <CardMedia>
          <Image
            src={post.coverImage}
            alt="image"
            width="800"
            height="450"
          />
        </CardMedia>
      }
      <CardContent>
        <Typography variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <DateFormatter dateString={post.date} />
        </Typography>
        {post.excerpt &&
          <>
            <br />
            <Typography variant="body2" color="text.secondary">
              {post.excerpt}
            </Typography>
          </>
        }
      </CardContent>
      {/* <CardActions>
      </CardActions> */}
    </Card>
  )
}

export default PostPreview

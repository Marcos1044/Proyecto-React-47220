/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CardComponent = ({data}) => {
  return (
    <Card sx={{ maxWidth: 345, m: "30px" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        image= {data.url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.explanation}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {data.date}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardComponent;
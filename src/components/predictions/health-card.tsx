import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
} from '@mui/material';

interface HealthCardProps {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  buttonAction: () => void;
  imageAlt: string;
}

const HealthCard: React.FC<HealthCardProps> = ({
  title,
  description,
  image,
  buttonText,
  buttonAction,
  imageAlt,
}) => (
  <Card>
    <CardMedia component="img" height="140" image={image} alt={imageAlt} />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
    <Button variant="outlined" fullWidth onClick={buttonAction}>
      {buttonText}
    </Button>
  </Card>
);

// Main component
const HealthCards: React.FC = () => {
  // Array of card data
  const cardData = [
    {
      title: 'Daily Nutrients',
      description:
        'Incorporate more leafy greens and vitamin-rich fruits into your diet. For optimal health, aim for a balanced intake of proteins and fibers.',
      image: 'assets/images/image1.png',
      buttonText: 'Learn More',
      buttonAction: () => console.log('Learn More clicked'),
      imageAlt: 'Assorted fruits and vegetables',
    },
    {
      title: 'Meal Plan',
      description:
        'Try this balanced meal plan including lean proteins and whole grains. Ensure your meals are rich in nutrients and low in processed foods.',
      image: 'assets/images/image2.png',
      buttonText: 'View Recipes',
      buttonAction: () => console.log('View Recipes clicked'),
      imageAlt: 'Grilled chicken with vegetables',
    },
    {
      title: 'Physical Activities',
      description:
        'Include at least 30 minutes of cardio exercises daily for better health. Yoga and stretching can aid in flexibility and mental relaxation.',
      image: 'assets/images/image3.png',
      buttonText: 'Explore Activities',
      buttonAction: () => console.log('Explore Activities clicked'),
      imageAlt: 'Person jogging in a park',
    },
  ];

  return (
    <Grid container spacing={3} justifyContent="center">
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <HealthCard
            title={card.title}
            description={card.description}
            image={card.image}
            buttonText={card.buttonText}
            buttonAction={card.buttonAction}
            imageAlt={card.imageAlt}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default HealthCards;

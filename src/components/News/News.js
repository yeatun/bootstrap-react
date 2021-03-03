import { Button } from 'bootstrap';
import React,{Card} from 'react';

const News = (props) => {
    const {title,description} =props.article;
    return (
        <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
};

export default News;
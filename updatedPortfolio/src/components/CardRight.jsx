import React from 'react';
import FadeInSection from './FadeIn';

const CardRight = () => {
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col md={4}>
            <img src="path/to/image" alt="Card Image" />
          </Col>
          <Col md={8}>
          <FadeInSection>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, perspiciatis et sit amet aliquam reprehenderit ducimus rerum? Vero quo repellendus, aut alias rem illum dolorum blanditiis quis rerum placeat vel aliquam fuga quasi asperiores deserunt ducimus accusamus excepturi, doloribus dolores laborum at iusto suscipit. Labore ut veniam aspernatur ipsam minus at magni itaque?</p>
            </FadeInSection>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CardRight;
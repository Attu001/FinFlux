import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const NewsComponent = () => {
    const [newsdata, setnewsdata] = useState(null);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/newsdata")
            .then((response) => {
                setnewsdata(response.data.results);
                console.log(response.data.results);
            })
            .catch((error) => {
                console.error('Error fetching data', error);
            });
    }, []);

    return (
        <Container className="mt-4">
            <h1>Latest News</h1>
            {newsdata ? ( // Ensure newsdata is not null before accessing it
                newsdata.length > 0 ? (
                    <div className="row">
                        {newsdata.map((article, index) => (
                            <div className="col-md-4 mb-4" key={index}>
                                <Card>
                                    {article.image_url && (
                                        <Card.Img
                                            variant="top"
                                            src={article.image_url}
                                            alt={article.title}
                                            style={{ maxHeight: "100px", objectFit: "cover" }}
                                        />
                                    )}
                                    <Card.Body>
                                        <Card.Title>{article.title}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">
                                            {article.pubDate}
                                        </Card.Subtitle>
                                        <Card.Text>{article.description}</Card.Text>
                                        <Button
                                            variant="primary"
                                            href={article.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Read More
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No articles found.</p>
                )
            ) : (
                <p>Loading news...</p>
            )}
        </Container>
    );
};

export default NewsComponent;

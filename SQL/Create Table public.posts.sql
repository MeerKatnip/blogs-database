CREATE TABLE posts (
	post_id serial PRIMARY KEY,
	title VARCHAR(200) NOT NULL,
	body TEXT NOT NULL,
	date_created TIMESTAMP DEFAULT current_timestamp NOT NULL,
	date_updated TIMESTAMP DEFAULT current_timestamp NOT NULL,
	is_published BOOLEAN DEFAULT False
);

INSERT INTO posts(title,body,is_published) 
VALUES 

	('First Blog Post!','First Blog Post body text',True),
	('Another Blog Post!','Another Blog Post body text',True);
	

first_author_id = Author.create(name: 'Jorge').id
Post.create(title: 'First post', body: 'lorem holder', author_id: first_author_id)

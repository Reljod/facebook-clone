package com.facebook.feedservice;

import lombok.NonNull;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import java.util.List;

public abstract class FeedRepositoryImpl implements FeedRepository {
    private final MongoTemplate mongoTemplate;

    public FeedRepositoryImpl(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    @Override
    public Page<Feed> findAllByUserId(String userId, @NonNull Pageable pageable) {
        Query query = new Query(Criteria.where("userId").is(userId));
        return getPage(query, pageable);
    }

    private Page<Feed> getPage(Query query, Pageable pageable) {
        long total = mongoTemplate.count(query, Feed.class);
        List<Feed> feeds = mongoTemplate.find(query.with(pageable), Feed.class);
        return new PageImpl<>(feeds, pageable, total);
    }

}

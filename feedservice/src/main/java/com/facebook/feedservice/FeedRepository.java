package com.facebook.feedservice;

import lombok.NonNull;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FeedRepository extends MongoRepository<Feed, String> {
    Page<Feed> findAllByUserId(String userId, @NonNull Pageable pageable);
}

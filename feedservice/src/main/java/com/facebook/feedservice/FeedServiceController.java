package com.facebook.feedservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.UUID;

@RestController
public class FeedServiceController {

    @Autowired
    private FeedRepository feedRepository;

    @PostMapping("/")
    public ResponseEntity<CreateFeedResponse> createFeed(@RequestBody CreateFeedRequest model) {
        String feedId = UUID.randomUUID().toString();

        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ISO_DATE_TIME;
        String dateNow = dateTimeFormatter.format(LocalDateTime.now());

        Feed feed = new Feed(feedId, model.userId, model.caption, dateNow, dateNow);

        feedRepository.save(feed);

        CreateFeedResponse createdFeedResponse = new CreateFeedResponse(feedId);
        return ResponseEntity.ok(createdFeedResponse);
    }

    @GetMapping("/feeds")
    public ResponseEntity<List<Feed>> getFeeds(
        @RequestParam(value = "userId") String userId,
        @RequestParam(value = "page", defaultValue = "0") int page,
        @RequestParam(value = "size", defaultValue = "10") int size,
        @RequestParam(value = "sort", defaultValue = "date") String sort,
        @RequestParam(value = "direction", defaultValue = "desc") String direction
    ) {
        PageRequest pageRequest = PageRequest.of(page, size, Sort.by(direction.equals("asc") ?
                Sort.Order.asc(sort) : Sort.Order.desc(sort)));
        return ResponseEntity.ok(feedRepository.findAllByUserId(userId, pageRequest).getContent());
    }
}



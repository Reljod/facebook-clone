package com.facebook.feedservice;

import lombok.*;
import lombok.experimental.Accessors;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@AllArgsConstructor
@Accessors(fluent = false)
@Document(collection = "feeds")
public class Feed {
    @Id
    public String feedId;
    public String userId;
    public String caption;
    public String createdAt;
    public String updatedAt;
}

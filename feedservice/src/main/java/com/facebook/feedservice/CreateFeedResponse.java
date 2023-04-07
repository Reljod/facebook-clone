package com.facebook.feedservice;


import lombok.*;
import lombok.experimental.Accessors;

@Getter
@Setter
@RequiredArgsConstructor
@Accessors(fluent = true)
public class CreateFeedResponse {
    public final @NonNull String feedId;
}

package com.facebook.feedservice;

import lombok.Getter;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;

@Getter
@Setter
@RequiredArgsConstructor
@Accessors(fluent = true)
public class CreateFeedRequest {
    public final String userId;
    public final String caption;
}

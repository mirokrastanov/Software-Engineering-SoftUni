ALTER TABLE [People]
ADD CONSTRAINT DF_DefaultBiography DEFAULT ('No bio provided...') FOR [Biography]
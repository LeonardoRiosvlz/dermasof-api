import { AppQuery } from 'src/shared/modules/app-cqrs/base/AppQuery';

export type GetUploadSignedUrlDto = {
  filename: string;
  contentType: string;
}

export class GetUploadSignedUrlQuery extends AppQuery {
  constructor(public request: GetUploadSignedUrlDto) {
    super();
  }
}

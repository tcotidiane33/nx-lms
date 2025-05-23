import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ChaptersService } from './chapters.service';
import { CreateChapterDto } from './dto/create-chapter.dto';
import { UpdateChapterDto } from './dto/update-chapter.dto';

@Controller()
export class ChaptersController {
  constructor(private readonly chaptersService: ChaptersService) {}

  @MessagePattern('createChapter')
  create(@Payload() createChapterDto: CreateChapterDto) {
    return this.chaptersService.create(createChapterDto);
  }

  @MessagePattern('findAllChapters')
  findAll() {
    return this.chaptersService.findAll();
  }

  @MessagePattern('findOneChapter')
  findOne(@Payload() id: number) {
    return this.chaptersService.findOne(id);
  }

  @MessagePattern('updateChapter')
  update(@Payload() updateChapterDto: UpdateChapterDto) {
    return this.chaptersService.update(updateChapterDto.id, updateChapterDto);
  }

  @MessagePattern('removeChapter')
  remove(@Payload() id: number) {
    return this.chaptersService.remove(id);
  }
}

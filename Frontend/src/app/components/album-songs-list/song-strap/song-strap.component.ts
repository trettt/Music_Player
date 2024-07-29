import { Component, Input } from '@angular/core';
import { Song } from '../../../models/song';
import { MusicService } from '../../../services/music.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Utils } from '../../utils/utils';

@Component({
  selector: 'app-song-strap',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './song-strap.component.html',
  styleUrl: './song-strap.component.scss'
})
export class SongStrapComponent {
  @Input() song!: Song;

  constructor(private musicService: MusicService) { }

  playSong(): void {
    console.log('playing song: ', this.song);
    this.musicService.setCurrentSong(this.song);
  }

  getDurationStringFromSeconds(seconds: number): string {
    return Utils.getDurationStringFromSeconds(seconds);
  }
}

class BadSongsController < ApplicationController
  before_action :find_song, only:[:show, :edit, :update, :destroy]

  def index
    @songs = BadSong.all
  end

  def show
  end

  def new
    @song = BadSong.new
    @artists = Artist.all
  end

  def create
    byebug
    @song = BadSong.create(bad_song_params)
    redirect_to @song
  end

  def edit
  end

  def update
    @song.update(bad_song_params)
    redirect_to @song
  end

  def destroy
    @song.destroy
    redirect_to bad_songs_path
  end


private

  def bad_song_params
    params.require(:bad_song).permit(:name, :artist_id)
  end

  def find_song
    @song = BadSong.find(params[:id])
  end

end

export class TestComponent {
    isLoading: boolean = true;
    apiService: any = {
        getFavorites: () => { },
    };
    fetchProfile(): void { }


    onFavPlayer(e: MouseEvent): void {
        this.apiService.addFavoritePlayer('test1');
        this.isLoading = true;
        setTimeout(() => {
            this.fetchProfile();
            this.isLoading = false;
        }, 1000);
    }
    onFavTeam(e: MouseEvent): void {
        this.apiService.addFavoriteTeam('testTEAM');
        this.isLoading = true;
        setTimeout(() => {
            this.fetchProfile();
            this.isLoading = false;
        }, 1000);
    }
    onUNfavPlayer(e: MouseEvent): void {
        this.apiService.removeFavoritePlayer('test1');
        this.isLoading = true;
        setTimeout(() => {
            this.fetchProfile();
            this.isLoading = false;
        }, 1000);
    }
    onUNfavTeam(e: MouseEvent): void {
        this.apiService.removeFavoriteTeam('testTEAM');
        this.isLoading = true;
        setTimeout(() => {
            this.fetchProfile();
            this.isLoading = false;
        }, 1000);
    }

    // this.playerStarName = this.currentPlayer!['Player'].replaceAll('.', '_')

    
    // this.apiService.getFavorites().subscribe({
    //     next: (data) => {
    //         console.log(data);

    //     }
    // })


}
const event = {
    name: 'Birthday party',
    guestlist: ['Enbakom ', 'Yaba ', 'Dave '] ,
    printGuestList() {
      console.log('Guest list for ' + this.name)

      this.guestlist.forEach((guest) => {
        console.log(guest + 'Is attending ' + this.name)
      })
    }
}

event.printGuestList()
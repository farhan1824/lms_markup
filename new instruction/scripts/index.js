// for tabs start
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// for tabs end


// load more for tabs starts
// tab 1 start

document.addEventListener("DOMContentLoaded", function() {
const cards = document.querySelectorAll('.content_questions');
const loadMoreBtn = document.getElementById('load-more-btn');
const initialCardsToShow = 2;

// Hide all cards initially except the first four
for (let i = initialCardsToShow; i < cards.length; i++) {
    cards[i].style.display = 'none';
}
loadMoreBtn.addEventListener('click', function() {
    // Show all cards when "Load More" button is clicked
    for (let i = initialCardsToShow; i < cards.length; i++) {
        cards[i].style.display = 'flex';
    }
    // Hide the "Load More" button after all cards are shown
    loadMoreBtn.style.display = 'none';
});
});
// tab2 starts
document.addEventListener("DOMContentLoaded", function() {
const cards = document.querySelectorAll('.about_questions');
const loadMoreBtn = document.getElementById('load-more-btn-tab-2');
const initialCardsToShow = 2;

// Hide all cards initially except the first four
for (let i = initialCardsToShow; i < cards.length; i++) {
    cards[i].style.display = 'none';
}
loadMoreBtn.addEventListener('click', function() {
    // Show all cards when "Load More" button is clicked
    for (let i = initialCardsToShow; i < cards.length; i++) {
        cards[i].style.display = 'flex';
    }
    // Hide the "Load More" button after all cards are shown
    loadMoreBtn.style.display = 'none';
});
});


// tab3 starts
document.addEventListener("DOMContentLoaded", function() {
const cards = document.querySelectorAll('.author_questions');
const loadMoreBtn = document.getElementById('load-more-btn-tab-3');
const initialCardsToShow = 2;

// Hide all cards initially except the first four
for (let i = initialCardsToShow; i < cards.length; i++) {
    cards[i].style.display = 'none';
}
loadMoreBtn.addEventListener('click', function() {
    // Show all cards when "Load More" button is clicked
    for (let i = initialCardsToShow; i < cards.length; i++) {
        cards[i].style.display = 'flex';
    }
    // Hide the "Load More" button after all cards are shown
    loadMoreBtn.style.display = 'none';
});
});
// load more for tabs end

// load more for list and grid starts
// for list
document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.list_cards');
    const loadMoreBtn = document.getElementById('load-more-btn');
    const initialCardsToShow = 3;

    // Hide all cards initially except the first four
    for (let i = initialCardsToShow; i < cards.length; i++) {
        cards[i].style.display = 'none';
    }
    loadMoreBtn.addEventListener('click', function() {
        // Show all cards when "Load More" button is clicked
        for (let i = initialCardsToShow; i < cards.length; i++) {
            cards[i].style.display = 'flex';
        }
        // Hide the "Load More" button after all cards are shown
        loadMoreBtn.style.display = 'none';
    });
});


// for grid

          document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');
    const loadMoreBtn = document.getElementById('load-more-btn');
    const initialCardsToShow = 6;

    // Hide all cards initially except the first four
    for (let i = initialCardsToShow; i < cards.length; i++) {
        cards[i].style.display = 'none';
    }

    loadMoreBtn.addEventListener('click', function() {
        // Show all cards when "Load More" button is clicked
        for (let i = initialCardsToShow; i < cards.length; i++) {
            cards[i].style.display = 'block';
        }
        // Hide the "Load More" button after all cards are shown
        loadMoreBtn.style.display = 'none';
    });
});
// load more for list and grid ends

// for search

document.addEventListener("DOMContentLoaded", function() {
      const searchInput = document.getElementById('searchInput');
    //   const searchInput = document.getElementsByClassName('wide-search');
      const cards = document.querySelectorAll('.card');
    
      searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
    
        cards.forEach(function(card) {
          const cardTitle = card.querySelector('.card-title').textContent.toLowerCase();
          const cardDescription = card.querySelector('.card-text').textContent.toLowerCase();
    
          if (cardTitle.includes(searchTerm) || cardDescription.includes(searchTerm)) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

package cardgame;

import java.util.List;

public class Player1 implements PlayerStrategy{
	int playerId;
	List<Integer> opponentIds;
	List<Card> myCards;
	public void init(int playerId, List<Integer> opponentIds) {
		this.playerId=playerId;
		this.opponentIds=opponentIds;
	}
	public void receiveInitialCards(List<Card> cards) {
		this.myCards=cards;
		for(int i=0;i<myCards.size();i++)
			System.out.println("Player1: "+myCards.get(i).getRank());
	}
	public boolean shouldDrawCard(Card topPileCard, Card.Suit changedSuit) {
		for(int i=0;i<myCards.size();i++) {
			if(myCards.get(i).getSuit().equals(changedSuit)||myCards.get(i).equals(topPileCard)) {
				return false;
			}
		}
		return true;
		
	}
	public void receiveCard(Card drawnCard) {
		myCards.add(drawnCard);
	}
	public Card playCard() {
		return null;
		
	}
	public Card.Suit declareSuit(){
		return null;
		
	}
	public void processOpponentActions(List<PlayerTurn> opponentActions) {
		
	}
	 public void reset() {
		 
	 }
}

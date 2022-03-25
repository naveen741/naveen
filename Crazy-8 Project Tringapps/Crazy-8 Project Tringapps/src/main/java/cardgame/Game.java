package cardgame;

import java.util.*;
import cardgame.Card.*;

public class Game {
	

	public static void main(String[] args) {
		/*Random r=new Random();
		List<Integer> num=new ArrayList<Integer>();
		Card[] card=Card.values();
		Suits suits[]=Suits.values();
		HashMap<Card,Suits> deck=new HashMap<>();
		for(int i=0;i<4;i++) {
			Set<Integer> ran=new LinkedHashSet<Integer>();
			while(ran.size()<13) {
				ran.add(r.nextInt(13)+1);
			}
			List<Integer> temp=new ArrayList<Integer>(ran);
			num.addAll(temp);
		}
		List<Integer> suit=new ArrayList<Integer>();
		for(int i=0;i<13;i++) {
			Set<Integer> ran=new LinkedHashSet<Integer>();
			while(ran.size()<4) {
				ran.add(r.nextInt(4)+1);
			}
			List<Integer> temp1=new ArrayList<Integer>(ran);
			suit.addAll(temp1);
		}
		for(int i=0;i<52;i++) {
			deck.put(card[num.get(i)-1], suits[suit.get(i)-1]);
			/*System.out.println(card[num.get(i)-1]+" "+ suits[suit.get(i)-1]);
		}*/
		int i;
		Card topCard;
		List<Card> deck=new ArrayList<>();
		deck=Card.getDeck();
		Collections.shuffle(deck);
		Player1 play1=new Player1();
		Player2 play2=new Player2();
		List<Card> player1=new ArrayList<>();
		List<Card> player2=new ArrayList<>();
		for(i=0;i<14;i++) {
			if(i%2==0)
				player2.add(deck.get(0));
			else 
				player1.add(deck.get(0));
			deck.remove(0);
			
		}
		play1.receiveInitialCards(player1);
		play2.receiveInitialCards(player2);
		for(i=0;i<3;i++) {
			if(play1.shouldDrawCard(deck.get(0), deck.get(0).getSuit())) {
				play1.receiveCard(deck.get(0));
				deck.remove(0);
			}
			else {
				topCard=play1.playCard();
				break;
			}
		}
		
		
		
		
		
	}

}

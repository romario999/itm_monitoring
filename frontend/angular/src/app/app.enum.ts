export const enum Path {
  Home = 'home',
  Success = 'success',
  CreateRoom = 'create-room',
  Join = 'join',
  Room = 'room',
  NotFound = '**',
  Details = 'details',
}

export const enum IconName {
  Copy = 'copy',
  Edit = 'edit',
  Save = 'save',
  Add = 'plus',
  ArrowLeft = 'arrow-left',
  SuccessMark = 'success-mark',
}

export const enum AriaLabel {
  CopyButton = 'Copy to clipboard',
  EditButton = 'Edit item',
  SaveButton = 'Save changes',
  AddButton = 'Add new point',
  ArrowButton = 'Arrow',
  Logo = 'To home page',
}

export const enum InputSidebarText {
  CurrencyUAH = 'UAH',
  PhoneCodeUA = '+380',
}

export const enum StepLabel {
  CreateRoom = 'Create room',
  AddPersonalInfo = 'Add personal info',
  AddWishlist = 'Add wishlist',
}

export const enum MessageSize {
  Toaster = 'toaster',
  Popover = 'popover',
}

export const enum MessageType {
  Success = 'success',
  Error = 'error',
  Info = 'info',
}

export const enum ToasterStatus {
  Hidden,
  Visible,
}

export const enum PopupPosition {
  Center = 'center',
  Right = 'right',
}

export const enum RadioGroupName {
  Wishlist = 'wish-list',
}

export const enum RadioButtonValue {
  WishGift = 'wish-gift',
  SurpriseGift = 'surprise-gift',
}

export const enum BaseLabel {
  FirstName = 'First name',
  LastName = 'Last name',
  ExchangeDate = 'Gift Exchange date',
  PhoneNumber = 'Phone number',
  RoomName = 'Room name',
  Budget = 'Gift budget',
  GiftIdeaLink = 'Add link',
  GiftIdeaWish = 'I wish for',
  Email = 'Email',
}

export const enum RadioButtonLabel {
  HaveGiftIdeas = 'I have gift ideas! (add up to 5 gift ideas)',
  WantSurpriseGift = 'I want a surprise gift',
}

export const enum TextareaLabel {
  RoomDescription = 'Room description',
  DeliveryAddress = 'Your delivery address (no North Pole required!)',
  AddInterests = 'Add your interests',
}

export const enum CaptionMessage {
  EmptyMessage = '',
  DoNotShare = 'Do not share this link with other users',
  BudgetExplanation = '0 means unlimited budget',
}

export enum ErrorMessage {
  DefaultMessage = '',
  invalidPhone = 'Phone number must be 9 digits',
  email = 'Please enter a valid email address',
  unsafeUrl = 'Please enter a valid link format',
}

export enum ToastMessage {
  DefaultMessage = '',
  SomethingWentWrong = 'Something went wrong. Try again.',
  UnavailableRoom = 'Room is unavailable or the link has expired',
  FullRoom = 'This room is full already. Joining is not possible anymore',
  PleaseCreateYourRoom = 'Please create your room first.',
  PleaseJoinTheRoom = 'Please join the room first',
}

export const enum InputType {
  Text = 'text',
  Email = 'email',
  Password = 'password',
  Tel = 'tel',
  Url = 'url',
  Number = 'number',
  Date = 'date',
}

export const enum InputPlaceholder {
  Date = 'Select date',
  PhoneNumber = '777777777',
  Budget = 'Type in your budget',
  EnterName = 'Enter your room name',
  WishPlaceholder = 'Enter your wish name',
  LinkPlaceholder = 'E.g. https://example.com/item',
  FirstName = 'e.g. Nickolas',
  LastName = 'e.g. Secret',
  Email = 'nickolas@example.com',
}

export const enum TextareaPlaceholder {
  EnterMessage = 'Enter your message here...',
  DeliveryAddress = 'Where should St. Nick deliver your gift?',
  AddInterests = 'e.g. reading, coffee, cozy socks',
}

export const enum ButtonText {
  Complete = 'Complete',
  Continue = 'Continue',
  BackToPrevStep = 'Back to the previous step',
  AddWish = 'Add Wish',
  Success = 'Visit Your Room',
  WelcomeJoin = 'Join the Room',
  InviteNewMembers = 'Invite New Members',
}

export const enum ButtonType {
  Button = 'button',
  Submit = 'submit',
}

export const enum PictureName {
  Car = 'car',
  BigPresents = 'big-presents',
  Star = 'star',
  Flat = 'flat',
  Letter = 'letter',
  Firework = 'firework',
  Star2 = 'star2',
}

export const enum FormTitle {
  CreateRoom = 'Create Your Secret Nick Room',
  AddDetails = 'Add your details',
  AddWishes = 'Add Your Wishes',
}

export const enum PageTitle {
  Success = 'Your Secret Nick Room is Ready!',
  WelcomeJoin = 'Welcome to the Secret Squad!',
  Home = 'Welcome to Secret Nick',
  CreateRoom = 'Create Your Room',
  CreateSuccess = 'Your Room is Ready!',
  Welcome = 'Join the Room – Secret Nick',
  JoinRoom = 'Fill in Your Info',
  JoinSuccess = 'You’ve Joined the Room!',
  Room = 'Your Room',
  YouHaveJoinedTheRoom = 'You Have Joined the Room! 🎅',
}

export const enum FormSubtitle {
  CreateRoom = 'Let the holiday magic begin! Set up your gift exchange in just a few steps.',
  AddDetails = 'Secret Nick needs to know where to send your present!',
  AddWishes = 'Let your Secret Nick know what would make you smile this season.',
}

export const enum PageSubtitle {
  Success = 'Share the link below with up to 20 friends to invite them — and don’t lose your personal link! Let the festive magic begin!',
  WelcomeJoin = `You've been invited to a cozy holiday gift exchange!Get ready to surprise and be surprised!`,
  SuccessJoin = 'Your holiday adventure is about to begin! Thank you for joining the Secret Nick room.',
}

export const enum RegEx {
  Digits = '\\d+',
  Phone = '^\\d{9}$',
  SafeUrl = '^https://',
}

export const enum ItemPosition {
  Center = 'center',
  Below = 'below',
  Right = 'right',
}

export const enum CopyMessage {
  Success = 'Link is copied',
  Error = 'Link is not copied. Try Again.',
}

export const enum CopyLinkType {
  Dark = 'dark',
  Light = 'light',
}

export const enum InvitationNotePopup {
  Success = 'Invitation note is copied',
  Error = 'Invitation note was not copied. Try again.',
}

export const enum Endpoint {
  rooms = '/api/rooms',
  users = '/api/users',
}

export const enum NavigationLinkSegment {
  Join = 'join',
  Room = 'room',
}

export const enum RoomDataCardVariant {
  Light = 'light',
  Color = 'color',
}

export enum DateFormat {
  Short = 'dd MMM yyyy',
}

export const enum RoomInfoCardTitle {
  ExchangeDate = 'Exchange Date',
  GiftBudget = 'Gift Budget',
  InvitationNote = 'Invitation Note',
}
